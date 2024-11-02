import React from "react";
import { TitleSm, Title, TitleLogo } from "@/components/common/Title";
import { AiOutlineCheckCircle  } from "react-icons/ai";

export default function Success() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Title title="Soumission Recu!" /><br/>
        <TitleSm title="Merci pour votre intérêt!"/>
        <br/>
        <AiOutlineCheckCircle  style={{ color: 'green', fontSize: '40px', width:'100px', height:'100px' }} />
        <br/>
        <Title title="Nous vous contacterons dans les plus brefs délais."/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
  