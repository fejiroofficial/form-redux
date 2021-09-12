export const submitForm = (payload) => {
  console.log("Payload:", payload)
  return {
      type: "SUBMIT_NAME",
      payload
  }
};
