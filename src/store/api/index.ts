import env from 'config';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

import {DispatchApiOptions} from '../interfaces';

const {API_URL} = env;

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const startLoadingAction = {
  type: 'GlobalActions',
  name: 'setLoadingState',
  payload: {
    loading: true,
  },
};

const stopLoadingAction = {
  type: 'GlobalActions',
  name: 'setLoadingState',
  payload: {
    loading: false,
  },
};

const dispatchApi = (options: DispatchApiOptions) => {
  const {
    actions,
    state: globalState,
    dispatch,
    actionType,
    actionPrefix,
    apiPath,
    method,
    headers,
    mustAuth,
    onSuccess,
    onFail,
    payload,
  } = options;

  const additionalOptions = {
    headers: {
      ...(headers || {}),
    },
  };

  if (mustAuth) {
    additionalOptions.headers = {
      ...(headers || {}),
      Authorization: `Bearer ${globalState.sessionToken}`,
    };
  }

  dispatch(startLoadingAction);

  try {
    const requestAction = {
      type: actionType,
      name: actionPrefix,
      payload,
    };

    if (typeof (actions[actionType] || {})[actionPrefix] === 'function') {
      dispatch(requestAction);
    }

    console.log(
      'dispatchApi',
      JSON.stringify(
        {
          method,
          apiPath,
          payload,
          additionalOptions,
        },
        null,
        2,
      ),
    );

    let clientPromise: Promise<AxiosResponse>;
    if (/^post|put|patch$/.test(method)) {
      clientPromise = apiClient[method as 'post' | 'put' | 'patch'](
        apiPath,
        payload,
        additionalOptions,
      );
    } else {
      clientPromise = apiClient[method as 'get' | 'delete'](
        apiPath,
        additionalOptions,
      );
    }

    clientPromise
      .then(({data}) => {
        console.log(
          'dispatchApi.success',
          JSON.stringify(
            {
              method,
              apiPath,
              payload,
              additionalOptions,
              response: data,
            },
            null,
            2,
          ),
        );

        const successAction = {
          type: actionType,
          name: `${actionPrefix}Success`,
          payload: {
            data,
            onSuccess,
          },
        };

        dispatch(successAction);

        dispatch(stopLoadingAction);
      })
      .catch((e) => {
        console.log(
          'dispatchApi.error',
          JSON.stringify(
            {
              method,
              apiPath,
              payload,
              additionalOptions,
              error: e,
            },
            null,
            2,
          ),
        );

        const failAction = {
          type: actionType,
          name: `${actionPrefix}Fail`,
          payload: {
            error: e,
            onFail,
          },
        };

        dispatch(failAction);

        dispatch(stopLoadingAction);
      });
  } catch (e) {
    dispatch(stopLoadingAction);
  }
};

export {dispatchApi};
