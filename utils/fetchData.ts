import apiUrl from "@/constants/api";

export default async function fetchData(query: String, variables?: {}) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables: { ...variables },
    })
  })

  const data = await response.json();
  return data;
}