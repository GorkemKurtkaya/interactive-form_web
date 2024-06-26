import { AuthService } from './auth.service';
import { SignUpadminDto } from './dto/signup.admin.dto';
import { LoginadminDto } from './dto/login.admin.dto';
import { Admin } from './schemas/admin.schema';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp_user(SignUpDto: SignUpadminDto): Promise<{
        token: String;
    }>;
    login_user(loginDto: LoginadminDto): Promise<{
        token: String;
    }>;
    validateToken(token: string): {
        valid: boolean;
    };
    getCompanyByToken(authHeader: string): Promise<Admin | undefined>;
}
