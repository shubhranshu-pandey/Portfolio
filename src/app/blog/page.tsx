import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-xl text-muted-foreground">Coming Soon</p>
        </div>
      </BlurFade>
    </section>
  );
}
