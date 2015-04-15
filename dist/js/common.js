var __TARTAR_HOST__ = "http://ec2-54-65-110-115.ap-northeast-1.compute.amazonaws.com";

function chkInput(obj, msg){
    if(obj.value == ""){
        alert(msg);
        obj.focus();
        return false;
    } else {
        return true;
    }
}

function frmChkValue(frm){

    switch(frm.id){
        case "contactFrm" :
            if(!chkInput(frm.contact_name, "이름을 입력해주세요 ~ ")) return false;
            if(!chkInput(frm.contact_email, "이메일을 입력해주세요 ~")) return false;
            if(!chkInput(frm.message_content, "내용을 입력 해주세요 ~ ")) return false;
        break;
        case "boardWriteFrm" :
            if(!chkInput(frm.subject, "제목을 입력해주세요 ~ ")) return false;
            if(!chkInput(frm.name, "이름을 입력 해주세요 ~ ")) return false;
            if(!chkInput(frm.password, "비밀번호를 입력 해주세요 ~ ")) return false;
        break;
    }

    return true;
}