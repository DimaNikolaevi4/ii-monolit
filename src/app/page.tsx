import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { DatasetsSection } from "@/components/datasets-section";
import { DeploymentSection } from "@/components/deployment-section";
import { FineTuningSection } from "@/components/fine-tuning-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { LegalSection } from "@/components/legal-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DatasetsSection />
        <DeploymentSection />
        <FineTuningSection />
        <PortfolioSection />
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
}
