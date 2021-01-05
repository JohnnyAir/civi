import db from "./db";
import { v4 as uuidv4 } from "uuid";

class Resume {
  id;
  resumetitle;
  jobTitle = "";
  fullname = "";
  email = "";
  works = [];
  
  constructor(data) {
    if (data) Object.assign(this, data);
  }

  Save() {
    Object.assign(this, {
      id: uuidv4(),
    });
    return db.resumes.add(this);
  }

  Update() {
    return db.resumes.put(this);
  }

  static All() {
    return db.resumes.toCollection().toArray();
  }

  static async ID(id, throwIfNull) {
    let resumePromise = db.resumes.get(id);
    if(!throwIfNull) return resumePromise;
    try {
      let resume = await resumePromise;
      if(resume) return resumePromise;
      throw "Not Found"
    } catch (error) {
      throw error;
    }
  }
}

// map Resume class to resume Table;
db.resumes.mapToClass(Resume);

export default Resume;
