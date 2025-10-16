import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { Reflector } from "@nestjs/core";
import { AuthService } from "src/modules/auth/auth.services";
export declare class SupplierAuthGuard implements CanActivate {
    private authService;
    private reflector;
    constructor(authService: AuthService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    protected extractToken(request: Request): string;
}
