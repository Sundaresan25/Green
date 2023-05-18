export function errorHandling(err: any) {
  let error = "Network error try again letter";

  if (err.message === "network error") {
    return error;
  } else {
    error = err;
    return error;
  }
}
