import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpErrorResponse,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  #notificationService = inject(NotificationService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (error: unknown) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.#notificationService.showError(
                'Unauthorized request. Please sign in and try again.',
              );
              return;
            }

            if (error.status === 403) {
              
              this.#notificationService.showError(
                'Access denied. You do not have permission to perform this action.',
              );
              return;
            }
          }
          const url = new URL(request.url);

          this.#notificationService.showError(
            `Request to "${url.pathname}" failed. Check the console for the details`,
            0,
          );
        },
      }),
    );
  }
}
