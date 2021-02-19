var handleRefCode = () => {
  let refCodeFromUrl = (new URL(window.location.href)).searchParams.get('refCode')
  if (refCodeFromUrl) {
    sessionStorage.setItem('refCode', refCodeFromUrl)
  }

  let refCode = sessionStorage.getItem('refCode')
  let refCodeField = document.getElementsByName('submitted[refcode]')
  refCodeField[0].setAttribute('value', refCode)
}


jQuery(window).load(function(){
  handleRefCode()
});