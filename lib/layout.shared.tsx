import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { BookOpen } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="inline-flex items-center gap-2.5 font-bold text-sm">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg border border-fd-border bg-fd-secondary/60 text-fd-foreground shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <span>{appName}</span>
        </div>
      ),
    },
    githubUrl: gitConfig.repo
      ? `https://github.com/${gitConfig.user}/${gitConfig.repo}`
      : `https://github.com/${gitConfig.user}`,
  };
}
