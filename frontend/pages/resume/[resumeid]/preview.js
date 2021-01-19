import CreateResumeLayout from "../../../components/CreateResumeLayout";
import FormInput from "../../../components/FormInput";
import Space from "../../../components/Space";
import Button from "../../../components/Button";
import styled from "styled-components";
import RightArrow from "../../../assets/Icons/right-arrow.svg";
import Resume from "../../../lib/resume";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from 'react-toast';


function AboutForm() {
  const router = useRouter();
  const { resumeid } = router.query;
 

  return (
   <br />
  );
}


export default function AboutPage() {
  return (
    <CreateResumeLayout>
      <AboutForm />
    </CreateResumeLayout>
  );
}
