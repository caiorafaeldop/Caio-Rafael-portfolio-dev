
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Eye, EyeOff, KeyRound, Mail, User, ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register State
  const [regName, setRegName] = useState("");
  const [regSurname, setRegSurname] = useState("");
  const [regUsername, setRegUsername] = useState(""); // Username or Email
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  // Forgot Password State
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    // Manual Validation
    if (!loginEmail || !loginPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    // Email validation (simple regex)
    if (loginEmail.includes("@") && !/\S+@\S+\.\S+/.test(loginEmail)) {
        toast.error("Por favor, insira um email válido.");
        return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock Error for specific case or random
      if (loginEmail === "erro@teste.com" || loginPassword === "errado") {
          toast.error("Usuário e senha incorretos");
          return;
      }

      console.log("Login:", { loginEmail, loginPassword });
      toast.success("Login realizado com sucesso!");
      navigate("/");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (!regName || !regSurname || !regUsername || !regPassword || !regConfirmPassword) {
        toast.error("Por favor, preencha todos os campos.");
        return;
    }

    if (regPassword !== regConfirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }
    
    setIsLoading(true);
    const fullName = `${regName}${regSurname}`; // Concatenation validation as requested
    
    setTimeout(() => {
      setIsLoading(false);
      console.log("Register:", { fullName, regUsername, regPassword });
      toast.success(`Conta criada para ${fullName}!`);
    }, 1500);
  };

  const handleForgotPassword = () => {
    if (securityAnswer.toLowerCase() !== "ciconectado") {
      toast.error("Resposta incorreta. Tente novamente.");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Reset Password:", { forgotEmail, newPassword });
      toast.success("Senha redefinida com sucesso!");
      setIsForgotPasswordOpen(false);
      setSecurityAnswer("");
      setNewPassword("");
      setForgotEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 select-none pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Home
        </Link>
        
        <Tabs defaultValue="login" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Registro</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card className="border-border/50 shadow-xl backdrop-blur-sm bg-card/95">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Boas-vindas de volta</CardTitle>
                <CardDescription className="text-center">
                  Entre com seu email ou nome de usuário
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email ou Usuário</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="login-email" 
                        placeholder="seu@email.com" 
                        className="pl-9" 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Senha</Label>
                      <Dialog open={isForgotPasswordOpen} onOpenChange={setIsForgotPasswordOpen}>
                        <DialogTrigger asChild>
                          <Button variant="link" className="p-0 h-auto text-xs text-primary">
                            Esqueceu a senha?
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Recuperar Senha</DialogTitle>
                            <DialogDescription>
                              Responda a pergunta de segurança para redefinir sua senha.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="forgot-email">Email ou Nome de Usuário</Label>
                              <Input 
                                id="forgot-email" 
                                value={forgotEmail}
                                onChange={(e) => setForgotEmail(e.target.value)}
                                placeholder="Digite seu identificador"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-password">Nova Senha</Label>
                              <Input 
                                id="new-password" 
                                type="password" 
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Digite a nova senha"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-primary font-medium">Qual a palavra secreta? (Pergunte à um diretor do Connecta)</Label>
                              <Input 
                                value={securityAnswer}
                                onChange={(e) => setSecurityAnswer(e.target.value)}
                                placeholder="Sua resposta"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="button" onClick={handleForgotPassword} disabled={isLoading}>
                              {isLoading ? "Verificando..." : "Redefinir Senha"}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="login-password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        className="pl-9 pr-9" 
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={false /* Handle loading manually to avoid 'intangible' feel */}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Entrando...
                        </>
                    ) : "Entrar"}
                  </Button>
                  <div className="text-center mt-4">
                      <span className="text-sm text-muted-foreground">Não tem conta? </span>
                      <Button variant="link" className="p-0 h-auto text-sm" onClick={() => setActiveTab("register")}>
                          Registre-se
                      </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card className="border-border/50 shadow-xl backdrop-blur-sm bg-card/95">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Criar conta</CardTitle>
                <CardDescription className="text-center">
                  Preencha seus dados para começar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input 
                        id="name" 
                        placeholder="João" 
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="surname">Sobrenome</Label>
                      <Input 
                        id="surname" 
                        placeholder="Silva" 
                        value={regSurname}
                        onChange={(e) => setRegSurname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reg-username">Email ou Usuário</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="reg-username" 
                        placeholder="joao.silva" 
                        className="pl-9" 
                        value={regUsername}
                        onChange={(e) => setRegUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Senha</Label>
                     <div className="relative">
                      <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="reg-password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        className="pl-9 pr-9" 
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        required
                      />
                         <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-confirm-password">Confirmar Senha</Label>
                    <div className="relative">
                        <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                        id="reg-confirm-password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                         className="pl-9 pr-9" 
                        value={regConfirmPassword}
                        onChange={(e) => setRegConfirmPassword(e.target.value)}
                        required
                        />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={false}>
                    {isLoading ? (
                         <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Criando conta...
                        </>
                    ) : "Registrar"}
                  </Button>
                  <div className="text-center mt-4">
                      <span className="text-sm text-muted-foreground">Já tem conta? </span>
                      <Button variant="link" className="p-0 h-auto text-sm" onClick={() => setActiveTab("login")}>
                          Entre
                      </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Login;
