function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberLength = memberValue.length;
    var memberMessage = document.getElementById("memberMessage");
    if (memberLength < 1) {
        memberMessage.innerHTML = "请输入会员名";
        memberMessage.style.color = "#FF0000";
        return false;
    } else {
        memberMessage.innerHTML = "OK";
        memberMessage.style.color = "#00FF00";
        return true;
    }
}