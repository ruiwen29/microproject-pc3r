<!--profile.jsp-->
<%@ page import ="jar.bean.UserBean"%>
<%@ page import ="jar.bean.ProfileBean"%>
<%ProfileBean profile = (ProfileBean)request.getSession().getAttribute("profile");%>
<%UserBean user = (UserBean)request.getSession().getAttribute("user");%>
<!--modifyAccount.html-->
<!DOCTYPE html>
<html lang="en">
<head>
<!--modifyAccount.html-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="/static/js/jquery.min.js"></script>
    <script src="/static/js/popper.js"></script>
    <script src="/static/js/bootstrap.min.js"></script>
    <script src='/static/js/page.js'></script>
</head>
<body>
<div class="container">
    <nav class="navbar navbar-inverse" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand"><%=user.getUsername()%></a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li><a href="/logout/" class="text-success">deconnexion</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <fieldset>
        <legend>Espace de client</legend>
        <div id="modifyCompte">
            <h6>Modifiez votre profil</h6>
            <form action="${pageContext.request.contextPath}/Client?method=modifyProfile" method="post">{% csrf_token %}
                <div class="form-group">
                    <label>Nom: </label>
                    <input type="text" name="nom" value= "<%=profile.getNom()%>" class="form-control" placeholder="nom"
                           required="required"/>
                </div>
                <div class="form-group">
                    <label>Prenom: </label>
                    <input type="text" name="prenom" value= "<%=profile.getPrenom()%>" class="form-control" placeholder="prenom"
                           required="required"/>
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="password" name="pwd" value="123456" class="form-control" placeholder="password"
                           required="required"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value="<%=profile.getEmail()%>" class="form-control"
                           placeholder="email"/>
                </div>
                <div class="form-group">
                    <label>Adresse</label>
                    <input type="text" name="adresse" value="<%=profile.getAdresse()%>" class="form-control"
                           placeholder="adresse"/>
                </div>
                <div class="form-group">
                    <label>Telephone</label>
                    <input type="text" name="tel" value="<%=profile.getTelephone()%>" class="form-control" placeholder="telphone"/>
                </div>
                <a type="button" href="${pageContext.request.contextPath}/Gopage?page=profile" class="btn btn-primary">Annuler</a>
                <button type="submit" class="btn btn-primary float-right">Enregister</button>
            </form>
        </div>
    </fieldset>
</div>
</body>
</html>
