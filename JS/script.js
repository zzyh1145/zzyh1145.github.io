// 侧边栏
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementsByClassName('open-btn')[0].style.display = 'none';
    document.getElementsByClassName('open-btn')[0].style.left = '260px'; 
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName('open-btn')[0].style.display = 'block';
    document.getElementsByClassName('open-btn')[0].style.left = '20px'; 
}

// 搜索栏
function changeSearchEngine() {
    var selectedEngine = document.getElementById("searchEngine").value;
    var searchQuery = document.getElementById("searchQuery").value;
    var searchForm = document.getElementById("searchForm");
    searchForm.action = selectedEngine + "?q=" + searchQuery;
}

function submitSearch() {
    var selectedEngine = document.getElementById("searchEngine").value;
    var searchQuery = document.getElementById("searchQuery").value;
    window.location.href = selectedEngine + "?q=" + searchQuery;
}
