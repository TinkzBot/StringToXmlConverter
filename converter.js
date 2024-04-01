const fs = require('fs');

function convertToXML(input) {
  let lines = input.split('\n');
  let xml = '<people>';
  let currentPersonXml = '';
  let currentFamilyXml = '';
  let inFamily = false;

  for (let line of lines) {
    let parts = line.split('|');

    switch (parts[0]) {
      case 'P':
        if (currentPersonXml) {
          if (inFamily) {
            currentPersonXml += currentFamilyXml + '</family>';
            inFamily = false;
          }
          xml += currentPersonXml + '</person>';
        }
        currentPersonXml = `<person><firstname>${parts[1]}</firstname><lastname>${parts[2]}</lastname>`;
        break;
      case 'T':
        let phoneXml = `<phone><mobile>${parts[1]}</mobile><landline>${parts[2]}</landline></phone>`;
        if (inFamily) {
          currentFamilyXml += phoneXml;
        } else {
          currentPersonXml += phoneXml;
        }
        break;
      case 'A':
        let addressXml = `<address><street>${parts[1]}</street><city>${parts[2]}</city><zipcode>${parts[3]}</zipcode></address>`;
        if (inFamily) {
          currentFamilyXml += addressXml;
        } else {
          currentPersonXml += addressXml;
        }
        break;
      case 'F':
        if (inFamily) {
          currentPersonXml += currentFamilyXml + '</family>';
        }
        currentFamilyXml = `<family><name>${parts[1]}</name><born>${parts[2]}</born>`;
        inFamily = true;
        break;
    }
  }

  if (inFamily) {
    currentPersonXml += currentFamilyXml + '</family>';
  }
  if (currentPersonXml) {
    xml += currentPersonXml + '</person>';
  }

  xml += '</people>';
  return xml;
}



const input = fs.readFileSync('input.txt', 'utf8');

const xmlOutput = convertToXML(input);


fs.writeFileSync('output.xml', xmlOutput);
