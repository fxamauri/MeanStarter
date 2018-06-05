angular.module("views/auth/register.html",[]).run(["$templateCache",function($templateCache){
    $templateCache.put("templates/register.html",
    "<div class=\"container-fluid pages\">"+
    "  <div class=\"nav-login\">"+
    "    <img class=\"img-login\" src=\"app/assets/img/logos/icon.png\">"+
    "  </div>"+
    "  <div ng-show=\"registerCtrl.create\" class=\"col col-sm-6 col-md-4 horizontal-align\">"+
    "    <div ng-show=\"registerCtrl.err\" class=\"alert alert-danger text-center\" role=\"alert\">"+
    "      <span class=\"alert-close-btn\" ng-click=\"registerCtrl.close(2)\">&times;</span>"+
    "      <span>{{registerCtrl.errDescription}}</span>"+
    "    </div>"+
    "    <div class=\"cards\">"+
    "      <h3 class=\"text-center card-title\">Cadastro</h3>"+
    "      <form role=\"form\" name=\"RegisterForm\" ng-submit=\"registerCtrl.submit()\" novalidate>"+
    "        <div class=\"form-group\">"+
    "          <label class=\"card-label\" for=\"formGroupExampleInput\">Nome</label>"+
    "          <input type=\"text\" name=\"name\" ng-model=\"registerCtrl.user.name\" class=\"form-control\" placeholder=\"Digite seu nome\" ng-class=\"{'has-error': RegisterForm.name.$invalid && RegisterForm.name.$dirty}\" ui-br-name required>"+
    "          <div class=\"error-container\" ng-show=\"RegisterForm.name.$dirty && RegisterForm.name.$invalid\">"+
    "            <small ng-show=\"RegisterForm.name.$error.required\" class=\"form-text text-muted text-danger\">O nome é obrigatório.</small>"+
    "            <small ng-show=\"RegisterForm.name.$error.minname\" class=\"form-text text-muted text-danger\">O campo deve ser composto por nome e sobrenome.</small>"+
    "          </div>"+
    "        </div>"+
    "        <div class=\"form-group\">"+
    "          <label class=\"card-label\" for=\"formGroupExampleInput\">Endereço de Email</label>"+
    "          <input type=\"email\" name=\"email\" ng-model=\"registerCtrl.user.email\" class=\"form-control\" placeholder=\"email@examplo.com.br\" ng-class=\"{'has-error': RegisterForm.email.$invalid && RegisterForm.email.$dirty}\" ui-email required>"+
    "          <div class=\"error-container\" ng-show=\"RegisterForm.email.$dirty && RegisterForm.email.$invalid\">"+
    "            <small ng-show=\"RegisterForm.email.$error.required\" class=\"form-text text-muted text-danger\">O endereço de email é obrigatório.</small>"+
    "            <small ng-show=\"RegisterForm.email.$error.invalidEmail\" class=\"form-text text-muted text-danger\">Digite um endereço de email válido.</small>"+
    "            <small ng-show=\"RegisterForm.email.$error.emailExists\" class=\"form-text text-muted text-danger\">Este endereço de email já foi utilizado por outra conta.</small>"+
    "          </div>"+
    "        </div>"+
    "        <div class=\"form-group\">"+
    "          <label class=\"card-label\" for=\"formGroupExampleInput\">Celular</label>"+
    "          <input type=\"tel\" name=\"phoneNumber\" ng-model=\"registerCtrl.user.phoneNumber\" class=\"form-control\" placeholder=\"(xx) XXXXX-XXXX\" ng-class=\"{'has-error': RegisterForm.phoneNumber.$invalid && RegisterForm.phoneNumber.$dirty}\" ui-br-cellphone required>"+
    "          <div class=\"error-container\" ng-show=\"RegisterForm.phoneNumber.$dirty && RegisterForm.phoneNumber.$invalid\">"+
    "            <small ng-show=\"RegisterForm.phoneNumber.$error.required\" class=\"form-text text-muted text-danger\">O celular é obrigatório.</small>"+
    "            <small ng-show=\"RegisterForm.phoneNumber.$error.invalidCellphone\" class=\"form-text text-muted text-danger\">Digite um celular válido.</small>"+
    "            <small ng-show=\"RegisterForm.phoneNumber.$error.phoneNumberExists\" class=\"form-text text-muted text-danger\">Este celular já foi utilizado por outra conta.</small>"+
    "          </div>"+
    "        </div>"+
    "        <div class=\"form-group\">"+
    "          <label class=\"card-label\" for=\"formGroupExampleInput\">Senha</label>"+
    "          <input type=\"{{registerCtrl.hidepasswordA ? 'password' : 'text'}}\" name=\"password\" ng-model=\"registerCtrl.user.password\" class=\"form-control\" placeholder=\"Digite sua senha aqui\" ng-class=\"{'has-error': RegisterForm.password.$invalid && RegisterForm.password.$dirty}\" zxcvbn=\"registerCtrl.passwordStrength\" required>"+
    "          <i ng-click=\"registerCtrl.toggle('hideA')\" ng-show=\"registerCtrl.hideA\" class=\"fa fa-eye-slash fa-position\" aria-hidden=\"true\"></i>"+
    "          <i ng-click=\"registerCtrl.toggle('showA')\" ng-show=\"registerCtrl.showA\" class=\"fa fa-eye fa-position\" aria-hidden=\"true\"></i>"+
    "          <div class=\"error-container\" ng-show=\"RegisterForm.password.$dirty && RegisterForm.password.$invalid\">"+
    "            <small ng-show=\"RegisterForm.password.$error.required\" class=\"form-text text-muted text-danger\">A senha é obrigatória.</small>"+
    "          </div>"+
    "          <div strength-password strength=\"registerCtrl.passwordStrength\"></div>"+
    "        </div>"+
    "        <div class=\"form-group\">"+
    "          <label class=\"card-label\" for=\"formGroupExampleInput\">Confirme sua senha</label>"+
    "          <input type=\"{{registerCtrl.hidepasswordB ? 'password' : 'text'}}\" name=\"confirmPassword\" ng-model=\"registerCtrl.user.confirmPassword\" class=\"form-control\" placeholder=\"Confirme sua senha aqui\" ng-class=\"{'has-error': RegisterForm.confirmPassword.$invalid && RegisterForm.confirmPassword.$dirty}\" match=\"registerCtrl.user.password\" required>"+
    "          <i ng-click=\"registerCtrl.toggle('hideB')\" ng-show=\"registerCtrl.hideB\" class=\"fa fa-eye-slash fa-position\" aria-hidden=\"true\"></i>"+
    "          <i ng-click=\"registerCtrl.toggle('showB')\" ng-show=\"registerCtrl.showB\" class=\"fa fa-eye fa-position\" aria-hidden=\"true\"></i>"+
    "          <div class=\"error-container\" ng-show=\"RegisterForm.confirmPassword.$dirty && RegisterForm.confirmPassword.$invalid\">"+
    "            <small ng-show=\"RegisterForm.confirmPassword.$error.required\" class=\"form-text text-muted text-danger\">Confirmar a senha é obrigatório.</small>"+
    "            <small ng-show=\"RegisterForm.confirmPassword.$error.match\" class=\"form-text text-muted text-danger\">As senhas não correspondem.</small>"+
    "          </div>"+
    "        </div>"+
    "        <button class=\"mybutton btn-primary btn-lg btn-block\" ng-disabled=\"RegisterForm.$invalid\" type=\"submit\" name=\"Register\">"+
    "          <div ng-show=\"registerCtrl.start\" class=\"loader loader-btn\">"+
    "            <svg class=\"circular\" viewBox=\"25 25 50 50\">"+
    "              <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>"+
    "            </svg>"+
    "          </div>"+
    "          <span ng-show=\"!registerCtrl.start\">CADASTRAR</span>"+
    "        </button>"+
    "        <br>"+
    "        <div class=\"row align-items-center\">"+
    "           <div class=\"col\">"+
    "             <a href=\"#/login\">Login</a>"+
    "           </div>"+
    "           <div class=\"col text-right\">"+
    "             <a href=\"#/recuperar\">Esqueceu sua senha?</a>"+
    "           </div>"+
    "        </div>"+
    "      </form>"+
    "    </div>"+
    "  </div>"+
    "  <div ng-show=\"!registerCtrl.create\" class=\"col col-sm-6 col-md-4 horizontal-align\">"+
    "    <div ng-show=\"registerCtrl.sendSuccess\" class=\"alert alert-success text-center\" role=\"alert\">"+
    "      <span class=\"alert-close-btn\" ng-click=\"registerCtrl.close(0)\">&times;</span>"+
    "      <span>Seu novo token de ativação foi enviado com sucesso.</span>"+
    "    </div>"+
    "    <div ng-show=\"registerCtrl.sendDanger\" class=\"alert alert-danger text-center\" role=\"alert\">"+
    "      <span class=\"alert-close-btn\" ng-click=\"registerCtrl.close(1)\">&times;</span>"+
    "      <span>Erro ao tentar reenviar um novo token de ativação.</span>"+
    "    </div>"+
    "    <div class=\"cards\">"+
    "      <h2 class=\"text-center card-title\">Parabéns!</h2>"+
    "      <img src=\"app/assets/img/icons/send.png\" class=\"img img-responsive img-congrulations\"/>"+
    "      <p class=\"text-congrulations\">Sua conta foi <span class=\"text-bold\">criada com sucesso</span></p>"+
    "      <p class=\"text-congrulations\">Entre em contato com o <span calss=\"text-bold\">administrador</span> do sistema para os próximos passos.</p>"+
    "      <br>"+
    "      <div class=\"row align-items-center\">"+
    "         <div class=\"col\">"+
    "           <a href=\"#/login\">Login</a>"+
    "         </div>"+
    "         <div class=\"col text-right\">"+
    "           <a href=\"#/recuperar\">Esqueceu sua senha?</a>"+
    "         </div>"+
    "      </div>"+
    "    </div>"+
    "  </div>"+
    "</div>"+
    "");
}]);