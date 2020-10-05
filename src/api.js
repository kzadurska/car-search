const baseUrl = API_URL || 'http://localhost:8080';

export async function getMakesApi() {
  try {
    const myRequest = new Request(`${baseUrl}/api/makes`, {
      method: 'GET',
    });
    const response = await fetch(myRequest);
    return response.json();
  } catch (error) {
    return error;
  }
}

export async function getModelsApi(make) {
  try {
    const myRequest = new Request(`${baseUrl}/api/models?make=${make}`, {
      method: 'GET',
    });
    const response = await fetch(myRequest);
    return response.json();
  } catch (error) {
    return error;
  }
}

export async function getVehiclesApi(make, model) {
  try {
    const myRequest = new Request(`${baseUrl}/api/vehicles?make=${make}&model=${model}`, {
      method: 'GET',
    });
    const response = await fetch(myRequest);
    return response.json();
  } catch (error) {
    return error;
  }
}
