import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if(totalPages > 1) {
      <nav class="mt-4" aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" [class.disabled]="currentPage === 1">
            <a class="page-link" (click)="onPageChange(currentPage - 1)" style="cursor: pointer;">Précédent</a>
          </li>
          @for (page of pages; track page) {
            <li class="page-item" [class.active]="currentPage === page">
              <a class="page-link" (click)="onPageChange(page)" style="cursor: pointer;">{{ page }}</a>
            </li>
          }
          <li class="page-item" [class.disabled]="currentPage === totalPages">
            <a class="page-link" (click)="onPageChange(currentPage + 1)" style="cursor: pointer;">Suivant</a>
          </li>
        </ul>
      </nav>
    }
  `
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
