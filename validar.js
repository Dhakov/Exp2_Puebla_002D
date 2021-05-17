function validacion()
{
    user = document.getElementById('user').value;
    pass = document.getElementById('pass_user').value;
    pass_re = document.getElementById('pass_user_re').value;

    if(user == null || user.length==0 || /^\s+$/.test(user))
    {
        alert('Error, el nombre de Usuario no se puede utilizar');
        document.getElementById('user').value="";
        document.datos.user.focus();
        return false;
    }
}