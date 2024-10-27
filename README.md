Berikut adalah penjelasan untuk setiap skrip yang akan dijalankan dalam pengujian kinerja menggunakan K6 untuk aplikasi SauceDemo.

1. Skrip: saucedemo-loadtest.js
$env:K6_BROWSER_HEADLESS = "true"; 
$Env:K6_WEB_DASHBOARD = "true"; 
$env:K6_WEB_DASHBOARD_EXPORT="C:\Users\User\OneDrive\Dokumen\TestBVarta\Report\loadtest-report.html"; 
k6 run .\saucedemo-loadtest.js

2. Skrip: saucedemo-smoketest.js
$env:K6_BROWSER_HEADLESS = "true"; 
$Env:K6_WEB_DASHBOARD = "true"; 
$env:K6_WEB_DASHBOARD_EXPORT="C:\Users\User\OneDrive\Dokumen\TestBVarta\Report\smoketest-report.html"; 
k6 run .\saucedemo-smoketest.js

3. Skrip: saucedemo-spiketest.js
$env:K6_BROWSER_HEADLESS = "true"; 
$Env:K6_WEB_DASHBOARD = "true"; 
$env:K6_WEB_DASHBOARD_EXPORT="C:\Users\User\OneDrive\Dokumen\TestBVarta\Report\spiketest-report.html"; 
k6 run .\saucedemo-spiketest.js

4. Skrip: saucedemo-stresstest.js
$env:K6_BROWSER_HEADLESS = "true"; 
$Env:K6_WEB_DASHBOARD = "true"; 
$env:K6_WEB_DASHBOARD_EXPORT="C:\Users\User\OneDrive\Dokumen\TestBVarta\Report\stresstest-report.html"; 
k6 run .\saucedemo-stresstest.js
