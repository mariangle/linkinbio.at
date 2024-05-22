export async function getGeoData() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return { country: data.country_name, ipAddress: data.ip };
  } catch (error) {
    return null;
  }
}
