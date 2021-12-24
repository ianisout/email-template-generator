/* INPUTS */
const engNameInput = document.getElementById('eng-name');
const alertIdInput = document.getElementById('alert-id');
const merNameInput = document.getElementById('mer-name');
const merIdInput = document.getElementById('mer-id');
const csmNameInput = document.getElementById('csm-name');
const issueDescInput = document.getElementById('issue-desc');
const impactInput = document.getElementById('impact');
const howResolveInput = document.getElementById('how-resolve');

/* SPANS - updating mid-text */
const idSpan = document.getElementById('span-id');
const merchantSpan = document.getElementById('span-mer');
const csmNameSpan = document.getElementById('span-csm-name');
const engNameSpan = document.getElementById('span-eng-name');
const merNameSpan = document.getElementById('span-mer-name');
const merIdSpan = document.getElementById('span-mer-id');
const issueDescSpan = document.getElementById("span-issue-desc");
const impactSpan = document.getElementById("span-impact");
const howResolveSpan = document.getElementById("span-how-resolve");

/* OUTPUTS */
const logId = () => idSpan.innerText = alertIdInput.value;
const logMerchant = () => merchantSpan.innerText = merNameInput.value;
alertIdInput.addEventListener('keyup', logId);
merNameInput.addEventListener('keyup', logMerchant);

const logCsm = () => csmNameSpan.innerText = csmNameInput.value;
csmNameInput.addEventListener('keyup', logCsm);

const logEng = () => engNameSpan.innerText = engNameInput.value;
engNameInput.addEventListener('keyup', logEng);

const logMerName = () => merNameSpan.innerText = merNameInput.value;
merNameInput.addEventListener('keyup', logMerName);

const logMerId = () => merIdSpan.innerText = merIdInput.value;
merIdInput.addEventListener('keyup', logMerId);

const logIssueDesc = () => issueDescSpan.innerText = issueDescInput.value;
issueDescInput.addEventListener('keyup', logIssueDesc);

const logImpact = () => impactSpan.innerText = impactInput.value;
impactInput.addEventListener('keyup', logImpact);

const logResolve = () => howResolveSpan.innerText = howResolveInput.value;
howResolveInput.addEventListener('keyup', logResolve);

