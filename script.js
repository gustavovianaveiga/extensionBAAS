const select = () => {
    document.querySelectorAll('input[type=checkbox]')[0].checked = true
    document.querySelectorAll('input[type=checkbox]')[1].checked = true
    document.querySelectorAll('input[type=checkbox]')[2].checked = true
    document.querySelectorAll('input[type=checkbox]')[3].checked = true
    document.querySelectorAll('input[type=checkbox]')[4].checked = true
    document.querySelectorAll('input[type=checkbox]')[5].checked = true
    document.querySelectorAll('input[type=checkbox]')[6].checked = true
    document.querySelectorAll('input[type=checkbox]')[7].checked = true
    document.querySelectorAll('input[type=checkbox]')[8].checked = true
    document.querySelectorAll('input[type=checkbox]')[9].checked = true
    document.querySelectorAll('input[type=checkbox]')[10].checked = true
    document.querySelectorAll('input[type=checkbox]')[11].checked = true
    document.querySelectorAll('input[type=checkbox]')[12].checked = true
    document.querySelectorAll('input[type=checkbox]')[13].checked = true
    document.querySelectorAll('input[type=checkbox]')[14].checked = true
    document.querySelectorAll('input[type=checkbox]')[15].checked = true
    document.querySelectorAll('input[type=checkbox]')[16].checked = true
    document.querySelectorAll('input[type=checkbox]')[17].checked = true
    document.querySelectorAll('input[type=checkbox]')[18].checked = true
    document.querySelectorAll('input[type=checkbox]')[19].checked = true
    document.querySelectorAll('input[type=checkbox]')[20].checked = true
    document.querySelectorAll('input[type=checkbox]')[21].checked = true
    document.querySelectorAll('input[type=checkbox]')[22].checked = true
    document.querySelectorAll('input[type=checkbox]')[23].checked = true
    document.querySelectorAll('input[type=checkbox]')[24].checked = true
    document.querySelectorAll('input[type=checkbox]')[25].checked = true
    document.querySelectorAll('input[type=checkbox]')[26].checked = true
    document.querySelectorAll('input[type=checkbox]')[27].checked = true
    document.querySelectorAll('input[type=checkbox]')[28].checked = true
    document.querySelectorAll('input[type=checkbox]')[29].checked = true
    document.querySelectorAll('input[type=checkbox]')[30].checked = true
    document.querySelectorAll('input[type=checkbox]')[31].checked = true
    document.querySelectorAll('input[type=checkbox]')[32].checked = true
    document.querySelectorAll('input[type=checkbox]')[33].checked = true
    document.querySelectorAll('input[type=checkbox]')[34].checked = true
    document.querySelectorAll('input[type=checkbox]')[35].checked = true
    document.querySelectorAll('input[type=checkbox]')[36].checked = true
    document.querySelectorAll('input[type=checkbox]')[37].checked = true
    document.querySelectorAll('input[type=checkbox]')[38].checked = true
    document.querySelectorAll('input[type=checkbox]')[39].checked = true
    document.querySelectorAll('input[type=checkbox]')[40].checked = true
    document.querySelectorAll('input[type=checkbox]')[41].checked = true
    document.querySelectorAll('input[type=checkbox]')[42].checked = true
    document.querySelectorAll('input[type=checkbox]')[43].checked = true
    document.querySelectorAll('input[type=checkbox]')[44].checked = true
    document.querySelectorAll('input[type=checkbox]')[45].checked = true
    document.querySelectorAll('input[type=checkbox]')[46].checked = true
    document.querySelectorAll('input[type=checkbox]')[47].checked = true
    document.querySelectorAll('input[type=checkbox]')[48].checked = true
    document.querySelectorAll('input[type=checkbox]')[49].checked = true
    document.querySelectorAll('input[type=checkbox]')[50].checked = true
    document.querySelectorAll('input[type=checkbox]')[51].checked = true
    document.querySelectorAll('input[type=checkbox]')[52].checked = true
    document.querySelectorAll('input[type=checkbox]')[53].checked = true
    document.querySelectorAll('input[type=checkbox]')[54].checked = true
    document.querySelectorAll('input[type=checkbox]')[55].checked = true
    document.querySelectorAll('input[type=checkbox]')[56].checked = true
    document.querySelectorAll('input[type=checkbox]')[57].checked = true
    document.querySelectorAll('input[type=checkbox]')[58].checked = true
    document.querySelectorAll('input[type=checkbox]')[59].checked = true
    document.querySelectorAll('input[type=checkbox]')[60].checked = true

}

const button = document.querySelector('button');

button.addEventListener('click', async() => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab.id);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: select,
    })
});