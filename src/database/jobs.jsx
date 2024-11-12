import { jobData } from "./db";

export function getAllJobs(){
    return jobData
}

export function getJobById(){
    return jobData.find(job => job.id === id);
}