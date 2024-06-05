import { Form } from "@/src/components/sign-page/feature-form/Form";
import { Header } from "@/src/components/sign-page/ui-header/Header";
import { Sns } from "@/src/components/sign-page/ui-sns/Sns";
import { SignLayout } from "@/src/layouts/sing-layout/SignLayout";

export default function SignUpPage() {
  return <SignLayout header={<Header />} form={<Form />} sns={<Sns />} />;
}
