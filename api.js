var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.dol.gov/V1/Employment/MSHA_employmentProduction?KEY=2e6895b2-3be1-45c2-b786-817df586ff0d", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
