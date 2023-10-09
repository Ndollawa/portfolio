const fetcher = async (...args: any[]) => {
  const response = await (fetch as (...args: any[]) => Promise<Response>)(
    ...args
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export { fetcher };
