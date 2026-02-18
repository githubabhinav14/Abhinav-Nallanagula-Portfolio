import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, Github, FileText, Building2, X } from 'lucide-react'
import { getProjectBySlug, projects as allProjects } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { Navigation } from '@/components/navigation'

type Params = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return notFound()

  return (
    <div>
      <Navigation />
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card rounded-2xl overflow-hidden relative">
            <div className="absolute top-4 right-4 z-10">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full bg-background/80 border border-border/60 p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Back to all projects"
              >
                <X className="w-4 h-4" />
              </Link>
            </div>
            <div
              className={cn(
                'relative h-40 bg-gradient-to-br',
                project.gradient ?? 'from-primary/15 to-secondary/10',
              )}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-2xl font-bold text-foreground/20 select-none">
                  {`{ ${project.title.slice(0, 12)}… }`}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/60">
                {project.type === 'freelance' ? 'Freelance' : 'Personal'}
              </span>
              </div>

            {/* Screenshots */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-4">Screenshots</h2>
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.screenshots.map((shot, i) => (
                    <div
                      key={shot.src + i}
                      className="rounded-xl overflow-hidden border border-border/60"
                    >
                      {/* Use img to avoid requiring Next Image config for unknown assets */}
                      <img
                        src={shot.src}
                        alt={shot.caption ?? `Screenshot ${i + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      {shot.caption ? (
                        <div className="p-3 text-xs text-muted-foreground">
                          {shot.caption}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-6 h-40 border border-dashed border-border/60 bg-secondary/40 flex items-center justify-center text-muted-foreground"
                    >
                      Placeholder • Screenshot {i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
              <div className="mt-10 grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-lg font-semibold">About this project</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This page summarizes the project goals, stack, and key
                  outcomes. Explore the screenshots above, browse the source
                  code, or launch the live demo if available.
                </p>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Highlights</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Modern stack with performance-focused UI</li>
                    <li>Clean, accessible interactions and typography</li>
                    <li>Deployed with best-practice project structure</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {project.type === 'freelance' && project.client ? (
                  <div className="glass-card rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <h3 className="text-sm font-semibold">Client</h3>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">{project.client.name}</div>
                      {project.client.industry ? (
                        <div className="text-muted-foreground">
                          {project.client.industry}
                        </div>
                      ) : null}
                      {project.client.website ? (
                        <Link
                          href={project.client.website}
                          target="_blank"
                          className="text-primary text-xs underline mt-1 inline-block"
                        >
                          {project.client.website}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {project.requirements && project.requirements.length > 0 ? (
                  <div className="glass-card rounded-xl p-4">
                    <h3 className="text-sm font-semibold mb-2">
                      Key Requirements
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      {project.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.documents && project.documents.length > 0 ? (
                  <div className="glass-card rounded-xl p-4">
                    <h3 className="text-sm font-semibold mb-2">Documents</h3>
                    <div className="space-y-2">
                      {project.documents.map((d) => (
                        <a
                          key={d.title}
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          {d.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}
