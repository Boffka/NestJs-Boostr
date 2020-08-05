import { Injectable } from "@nestjs/common";
import { RequestContext } from "./request-context.model";
import { IUserModel } from '../models/user.model';

@Injectable()
export class RequestContextService {
  get currentUser(): IUserModel | null {
    const requestContext = this.currentRequest;
    return (requestContext && requestContext.req['user']) || null;
  }

  get currentRequestId(): number | null {
    const requestContext = this.currentRequest;
    return (requestContext && requestContext.requestId) || null;
  }

  private get currentRequest() {
    const requestContext = RequestContext.currentContext;
    return requestContext || null;
  }
}