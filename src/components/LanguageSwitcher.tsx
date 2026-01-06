import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2 bg-muted/20 pl-3 pr-1.5 py-1.5 rounded-full border border-border/40 hover:bg-muted/30 transition-colors">
      <span className="text-lg leading-none select-none" role="img" aria-label="Language">
        🌐
      </span>
      
      <div className="flex items-center rounded-sm bg-muted/50 p-0.5 gap-0.5" role="group">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => i18n.changeLanguage('pt')}
          className={cn(
            "h-7 px-3 rounded-sm text-xs font-extrabold transition-all",
            // Active state
            i18n.language === 'pt'
              ? "bg-purple-600 text-white shadow-sm hover:bg-purple-700 hover:text-white"
              : "text-muted-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 bg-transparent"
          )}
        >
          PT
        </Button>
        <Button
          variant="ghost" 
          size="sm"
          onClick={() => i18n.changeLanguage('en')}
          className={cn(
            "h-7 px-3 rounded-sm text-xs font-extrabold transition-all",
            // Active state
            i18n.language === 'en'
              ? "bg-purple-600 text-white shadow-sm hover:bg-purple-700 hover:text-white"
              : "text-muted-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 bg-transparent"
          )}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
