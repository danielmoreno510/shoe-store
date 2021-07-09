export const handleHttpError = (error, context, customErrorInfo) => {
  if (process.env.NODE_ENV !== 'test') {
    console.tron(error, context, customErrorInfo);
  }
};

export default handleHttpError;
