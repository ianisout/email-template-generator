/* INPUTS */
const engNameInput = document.getElementById('eng-name');
const merNameInput = document.getElementById('mer-name');
const merIdInput = document.getElementById('mer-id');
const csmNameInput = document.getElementById('csm-name');
let issueDescInput = document.getElementById('issue-desc');
let impactInput = document.getElementById('impact');
let howResolveInput = document.getElementById('how-resolve');

/* SPANS - updating mid-text */
const idSpan = document.getElementById('span-id');
const merchantSpan = document.getElementById('span-mer');
const csmNameSpan = document.getElementById('span-csm-name');
const engNameSpan = document.getElementById('span-eng-name');
const merNameSpan = document.getElementById('span-mer-name');
const merIdSpan = document.getElementById('span-mer-id');
const issueDescSpan = document.getElementById('span-issue-desc');
const impactSpan = document.getElementById('span-impact');
const howResolveSpan = document.getElementById('span-how-resolve');

/* OUTPUTS */
const logMerchant = () => (merchantSpan.innerText = merNameInput.value);
merNameInput.addEventListener('keyup', logMerchant);

const logCsm = () => (csmNameSpan.innerText = csmNameInput.value);
csmNameInput.addEventListener('keyup', logCsm);

const logEng = () => (engNameSpan.innerText = engNameInput.value);
engNameInput.addEventListener('keyup', logEng);

const logMerName = () => (merNameSpan.innerText = merNameInput.value);
merNameInput.addEventListener('keyup', logMerName);

const logMerId = () => (merIdSpan.innerText = merIdInput.value);
merIdInput.addEventListener('keyup', logMerId);

const logIssueDesc = () => (issueDescSpan.innerText = issueDescInput.value);
issueDescInput.addEventListener('keyup', logIssueDesc);

const logImpact = () => (impactSpan.innerText = impactInput.value);
impactInput.addEventListener('keyup', logImpact);

const logResolve = () => (howResolveSpan.innerText = howResolveInput.value);
howResolveInput.addEventListener('keyup', logResolve);

const copyPopUp = document.querySelector('.copy-popup');

let alertType, apiType, impactType, solutionType;

const selectAlertType = sel => alertType = sel.options[sel.selectedIndex].text;
const selectApiType = sel => apiType = sel.options[sel.selectedIndex].text;
const selectImpactType = sel => impactType = sel.options[sel.selectedIndex].text;
const selectResolutionType = sel => solutionType = sel.options[sel.selectedIndex].text;

function applyDescChanges() {
  issueDescInput.innerText = `There's a ${alertType} on the ${apiType} API`;
  logIssueDesc();
}

function applyImpactChanges() {
  impactInput.innerText = impactType;
  logImpact();
}

function applyResolutionChanges() {
  howResolveInput.innerText = `Verify if the merchant is facing ${solutionType.toLowerCase()} issues`;
  logResolve();
}

/* Copy email icon */
function copyText(elemId) {
  let r = document.createRange();
  r.selectNode(document.getElementById(elemId));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  setTimeout(() => {
    copyPopUp.style.display = "none";
  }, 1500);
  setTimeout(() => {
    copyPopUp.style.display = "unset";
    document.getElementById(elemId).appendChild(copyPopUp);
  }, 100);
}
