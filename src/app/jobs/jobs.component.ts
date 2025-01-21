import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  public jobs: any = [];
  public page: number = 1;
  public noMoreResults = false;

  public getJobs() {
    axios.get(`${environment.BASE_BACKEND_URL}/getJobs?page=${this.page}`).then((response) => {
      if(response.status == 304) {
        this.noMoreResults = true;
      }
      if(response.data) {
        this.jobs.push(...response.data);
        if(response.data.length < 10) {
          this.noMoreResults = true;
        }
      }
     console.log(this.jobs);
    }).catch((err) => {
     this.jobs = [];
    })
  }

  public showMore() {
    this.page+=1;
    this.getJobs();
  }

  public readJob(jobId: string, index: number) {
    console.log('Reading job')
    axios.post(`${environment.BASE_BACKEND_URL}/read?jobId=${encodeURIComponent(jobId)}`).then((response) => {
      this.jobs.splice(index, 1)
    }).catch((err) => {
      console.log('Error while reading job', err)
    })
  }

  ngOnInit(): void {
    this.getJobs();
  }
}
