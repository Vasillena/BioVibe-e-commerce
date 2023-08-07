const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    let result;
    if (response.status != 204) {
      result = await response.json();
    }
    if (response.ok == false) {
      const error = result;
      throw error;
    }
    return result;
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = request.bind(null, "get");
