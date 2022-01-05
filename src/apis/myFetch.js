function createAbort (param = {}) {
  const controller = new AbortController();
  const signal = controller.signal;
  return [
    () => controller.abort(),
    {
      ...param,
      signal
    }
  ]
}

export {
  createAbort
}
