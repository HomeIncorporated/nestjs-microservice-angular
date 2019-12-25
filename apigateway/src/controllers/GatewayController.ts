import { All, Controller, Param, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { Gateway, InjectGateway } from "nest-gateway";

@Controller('/hackathon/:service')
export class GatewayController {
    constructor(
        @InjectGateway() private readonly gateway: Gateway,
    ) {
    }

    @All()
    do(@Req() req: Request, @Res() res: Response, @Param('service') id) {
        this.gateway.forward(req, res, id);
    }
}
