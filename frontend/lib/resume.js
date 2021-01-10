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

  save() {
    Object.assign(this, {
      id: uuidv4(),
    });
    return db.resumes.add(this);
  }

  update() {
    return db.resumes.put(this);
  }

  static all() {
    return db.resumes.toCollection().toArray();
  }

  static async findById(id, throwIfNull) {
    let resumePromise = db.resumes.get(id);
    if(!throwIfNull) return resumePromise;
    try {
      let resume = await resumePromise;
      if(resume) return resumePromise;
      throw new Error("Resume not Found")
    } catch (error) {
      throw error;
    }
  }
}

// map Resume class to resume Table;
db.resumes.mapToClass(Resume);

export default Resume;
