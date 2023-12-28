import JustValidate from "just-validate";

const formEl = document.querySelector("#mainform");

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

// validator.addField("#companyLogo", [
//   {
//     rule: "minFilesCount",
//     value: 1,
//     errorMessage: "company logo is required",
//   },
//   {
//     rule: "maxFilesCount",
//     value: 1,
//   },
// ]);

// preview main section

// I am not using FORM for Preview Section so i write code on my own
const previewSection = document.querySelector("#previewSection");

// loads (i know this part kinda messsi 😅)
const previewAgencyName = document.querySelector("#previewAgencyName");
const previewAgencyType = document.querySelector("#previewAgencyType");
const previewPassword = document.querySelector("#previewPassword");
const previewAddress = document.querySelector("#previewAddress");
const previewState = document.querySelector("#previewState");
const previePhoneNumber = document.querySelector("#previewPhoneNumber");
const previewTollFreeNumber = document.querySelector("#previewTollFreeNumber");
const previewEmailid = document.querySelector("#previewEmailid");
const previewCompanyName = document.querySelector("#previewCompanyName");
const previewOfficeSpace = document.querySelector("#previewOfficeSpace");
const previewWebsite = document.querySelector("#previewWebsite");

// Main Buttons
const disabledBtn1 = document.getElementById("disabledBtn1");

// Arrow function
const handleFormDatas = () => {
  previewSection.classList.remove("hidden");

  const {
    agencyName,
    agencyType,
    password,
    address,
    state,
    emailId,
    radio,
    telephoneNum,
    tollFreeNum,
    companyName,
    website,
  } = formEl.elements;

  previewAgencyName.textContent = agencyName.value;
  previewAgencyType.textContent = agencyType.value;
  previewPassword.textContent = password.value;
  previewAddress.textContent = address.value;
  previewState.textContent = state.value;
  previePhoneNumber.textContent = telephoneNum.value;
  previewTollFreeNumber.textContent = tollFreeNum.value;
  previewEmailid.textContent = emailId.value;
  previewOfficeSpace.textContent = radio.value;
  previewCompanyName.textContent = companyName.value;
  previewWebsite.textContent = website.value;
};

// if success
validator.onSuccess(handleFormDatas);

const previewCancelBtn = document.getElementById("previewCancelBtn");
const previewConfirmBtn = document.getElementById("previewConfirmBtn");
const alertBox = document.getElementById("alertBox");

previewCancelBtn.addEventListener("click", () => {
  previewSection.classList.add("hidden");
});

const confirmEvent = () => {
  disabledBtn1.disabled = true;

  const [
    agencyName,
    agencyType,
    password,
    address,
    state,
    emailId,
    radio,
    telephoneNum,
    tollFreeNum,
    companyName,
    website,
  ] = formEl.elements;

  previewSection.classList.add("hidden");
  alertBox.classList.remove("hidden");

  setTimeout(() => {
    alertBox.classList.add("hidden");

    // reseting all Values from inputs
    agencyName.value = "";
    agencyType.value = "";
    password.value = "";
    address.value = "";
    state.value = "";
    emailId.value = "";
    radio.value = "";
    telephoneNum.value = "";
    companyName.value = "";
    tollFreeNum.value = "";
    website.value = "";

    disabledBtn1.disabled = false;
  }, 7000);
};
previewConfirmBtn.addEventListener("click", confirmEvent);
