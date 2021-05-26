import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor (
        private userService: UserService,
        private jwtService: JwtService
    ){}


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email)
        if (user && user.password === password) {
            const { password, ...result} = user
            return result
        }
        return null
    }

    async login(user: any) {
        const payload = { id: user.id, createdAt: new Date()}
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

}
