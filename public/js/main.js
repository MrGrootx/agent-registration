import JustValidate from "just-validate";

const formEl = document.getElementById("mainform");

const validator = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validator.addField("#agencyName", [
  {
    rule: "required",
    errorMessage: "agency name is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
  {
    rule: "minLength",
    value: 1,
  },
  {
    rule: "maxLength",
    value: 20,
  },
]);

validator.addField("#agencyType", [
  {
    rule: "required",
    errorMessage: "agency type is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
  {
    rule: "minLength",
    value: 1,
  },
  {
    rule: "maxLength",
    value: 20,
  },
]);

validator.addField("#password", [
  {
    rule: "required",
    errorMessage: "password is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
]);

validator.addField("#address", [
  {
    rule: "required",
    errorMessage: "address is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
]);

validator.addField("#state", [
  {
    rule: "required",
    errorMessage: "state is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
]);

validator.addField("#telephoneNum", [
  {
    rule: "required",
    errorMessage: "telephone number required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
  {
    rule: "number",
    errorMessage: "input be number",
  },
]);

validator.addField("#telephoneNum", [
  {
    rule: "required",
    errorMessage: "telephone number required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
  {
    rule: "number",
    errorMessage: "input should be number",
  },
]);

validator.addField("#tollFreeNum", [
  {
    rule: "required",
    errorMessage: "tollFree number is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
  {
    rule: "number",
  },
]);

validator.addField("#emailId", [
  {
    rule: "required",
    errorMessage: "email address is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
  {
    rule: "email",
  },
]);

validator.addField("#website", [
  {
    rule: "required",
    errorMessage: "your website url is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
]);

validator.addField("#companyName", [
  {
    rule: "required",
    errorMessage: "company name is required",
    errorFieldCssClass: ["invalid"],
    successFieldCssClass: ["valid"],
  },
]);

validator.addField("#companyLogo", [
  {
    rule: "minFilesCount",
    value: 1,
    errorMessage: "company logo is required",
  },
  {
    rule: "maxFilesCount",
    value: 1,
  },
]);

validator.onSuccess(() => {
  const formData = new FormData(formEl);
  console.log(formData);
});
