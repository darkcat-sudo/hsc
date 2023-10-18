const pdficon = `
<svg style="height: 19px; width:19px; opacity:0.9;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
    <!-- Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch -->
    <title>icon 70 document file pdf</title>
    <desc>Created with Sketch.</desc>
    <defs/>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="icon-70-document-file-pdf" sketch:type="MSArtboardGroup" fill="var(--nav)">
            <path d="M21,13 L21,10 L21,10 L15,3 L4.00276013,3 C2.89666625,3 2,3.89833832 2,5.00732994 L2,27.9926701 C2,29.1012878 2.89092539,30 3.99742191,30 L19.0025781,30 C20.1057238,30 21,29.1017876 21,28.0092049 L21,26 L28.9931517,26 C30.6537881,26 32,24.6577357 32,23.0012144 L32,15.9987856 C32,14.3426021 30.6640085,13 28.9931517,13 L21,13 L21,13 L21,13 Z M20,26 L20,28.0066023 C20,28.5550537 19.5523026,29 19.0000398,29 L3.9999602,29 C3.45470893,29 3,28.5543187 3,28.004543 L3,4.99545703 C3,4.45526288 3.44573523,4 3.9955775,4 L14,4 L14,8.99408095 C14,10.1134452 14.8944962,11 15.9979131,11 L20,11 L20,13 L12.0068483,13 C10.3462119,13 9,14.3422643 9,15.9987856 L9,23.0012144 C9,24.6573979 10.3359915,26 12.0068483,26 L20,26 L20,26 L20,26 Z M15,4.5 L15,8.99121523 C15,9.54835167 15.4506511,10 15.9967388,10 L19.6999512,10 L15,4.5 L15,4.5 Z M11.9945615,14 C10.8929956,14 10,14.9001762 10,15.992017 L10,23.007983 C10,24.1081436 10.9023438,25 11.9945615,25 L29.0054385,25 C30.1070044,25 31,24.0998238 31,23.007983 L31,15.992017 C31,14.8918564 30.0976562,14 29.0054385,14 L11.9945615,14 L11.9945615,14 Z M25,19 L25,17 L29,17 L29,16 L24,16 L24,23 L25,23 L25,20 L28,20 L28,19 L25,19 L25,19 Z M12,18 L12,23 L13,23 L13,20 L14.9951185,20 C16.102384,20 17,19.1122704 17,18 C17,16.8954305 16.1061002,16 14.9951185,16 L12,16 L12,18 L12,18 Z M13,17 L13,19 L15.0010434,19 C15.5527519,19 16,18.5561352 16,18 C16,17.4477153 15.5573397,17 15.0010434,17 L13,17 L13,17 Z M18,16 L18,23 L20.9951185,23 C22.102384,23 23,22.1134452 23,20.9940809 L23,18.0059191 C23,16.8980806 22.1061002,16 20.9951185,16 L18,16 L18,16 Z M19,17 L19,22 L21.0010434,22 C21.5527519,22 22,21.5562834 22,21.0001925 L22,17.9998075 C22,17.4476291 21.5573397,17 21.0010434,17 L19,17 L19,17 Z" id="document-file-pdf" sketch:type="MSShapeGroup"/>
        </g>
    </g>
</svg>
`;
const iframe = document.getElementById('pdfFrame');
  // Get the pdfID from local storage or set a default value
const pdfID = localStorage.getItem('pdfID') || '';

  // Set the iframe source
iframe.src = `https://drive.google.com/file/d/${pdfID}/preview`;


const cata1subjs1chapt1 =`
<div class="rows file-icon pdfz" id="12nu-3XZs1cxUr8YoybjsvswLoIikL08i">${pdficon}<p>ACS Vector LS 01</p></div>
<div class="rows file-icon pdfz" id="1p_oVnFYMTNrYrHaQT8ciQHQHfI40-NnG">${pdficon}<p>ACS Vector LS 02</p></div>
<div class="rows file-icon pdfz" id="1Ptf46vhm2ESlL8TdVsnKw-I8gOPaN9qu">${pdficon}<p>ACS Vector LS 03</p></div>
<div class="rows file-icon pdfz" id="18dxUcMyiGAXHzkB-3lt-uQ7hwdpOFGUd">${pdficon}<p>Ruet Question Bank</p></div>
<div class="rows file-icon pdfz" id="pdf6">${pdficon}<p>Chem 2nd</p></div>
<div class="rows file-icon pdfz" id="pdf7">${pdficon}<p>Bio 1st</p></div>
<div class="rows file-icon pdfz" id="pdf8">${pdficon}<p>Bio 2nd</p></div>
<div class="rows file-icon pdfz" id="pdf9">${pdficon}<p>ICT</p></div>
 
`;

function checkAndRenderPDFContent() {
// Retrieve values from local storage
const storedChapters = localStorage.getItem('hchapters');
const storedSubjects = localStorage.getItem('hsubjects');
const storedCategory = localStorage.getItem('hcatagory');

// Create the variable name to match
const variableNameToMatch = `${storedCategory}${storedSubjects}${storedChapters}`;
const pdfs = document.querySelector('#pdfs');
// Check if the variable name matches
if (variableNameToMatch === 'cata1subjs1chapt1') {
    
    pdfs.innerHTML = cata1subjs1chapt1;
} else {
    rrentCata = `
    <div class="default-rows">Nothings Here</div>
    `;
    pdfs.innerHTML = rrentCata;
}

}