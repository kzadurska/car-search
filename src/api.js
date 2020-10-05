const baseUrl = API_URL || 'http://localhost:8080';

export async function getMakesApi() {
  const myRequest = new Request(`${baseUrl}/api/makes`, {
    method: 'GET',
  });
  const response = await fetch(myRequest);
  return response.json();
}

export async function getModelsApi(make) {
  const myRequest = new Request(`${baseUrl}/api/models?make=${make}`, {
    method: 'GET',
  });
  const response = await fetch(myRequest);
  return response.json();
}

export async function getVehiclesApi(make, model) {
  const myRequest = new Request(`${baseUrl}/api/vehicles?make=${make}&model=${model}`, {
    method: 'GET',
  });
  const response = await fetch(myRequest);
  return response.json();
}
