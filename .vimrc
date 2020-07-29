
set background=dark
colorscheme wargrey
hi vertsplit ctermfg=238 ctermbg=235
hi LineNr ctermfg=237
hi StatusLine ctermfg=235 ctermbg=245
hi StatusLineNC ctermfg=235 ctermbg=237
hi Search ctermbg=58 ctermfg=15
hi Default ctermfg=1
hi clear SignColumn
hi SignColumn ctermbg=235
hi GitGutterAdd ctermbg=235 ctermfg=245
hi GitGutterChange ctermbg=235 ctermfg=245
hi GitGutterDelete ctermbg=235 ctermfg=245
hi GitGutterChangeDelete ctermbg=235 ctermfg=245
hi EndOfBuffer ctermfg=237 ctermbg=235

set hidden
set t_Co=16
set history=100
set statusline=%=&P\ %f\ %m
set fillchars=vert:\ ,stl:\ ,stlnc:\
set laststatus=2
set noshowmode

filetype indent on
set tabstop=4
set shiftwidth=4
set expandtab
set smartindent
set autoindent

" Syntastic syntax configuration
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

noremap <Up> ""
noremap! <Up> <Esc>
noremap <Down> ""
noremap! <Down> <Esc>
noremap <Left> ""
noremap! <Left> <Esc>
noremap <Right> ""
noremap! <Right> <Esc>

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 0
let g:syntastic_check_on_wq = 0

function Py2()
  let g:syntastic_python_python_exec = '/usr/local/bin/python2.7'
endfunction

function Py3()
  let g:syntastic_python_python_exec = '/usr/local/bin/python3.6'
endfunction

let g:syntastic_quiet_messages = { "regex": [
			\ 'possible unwanted space at "{"',
			\ ] } 

call Py3()   " default to Py3 because I try to use it when possible

set wildmode=longest,list,full
set wildmenu

syntax off

call plug#begin('~/.vim/plugged')

"Plug 'junegunn/goyo.vim'
Plug 'lervag/vimtex', { 'on': [] }
Plug  'vim-python/python-syntax'

call plug#end()

let g:python_highlight_all = 1

"let g:goyo_width = 200
"let g:goyo_height = 200

"autocmd VimEnter * Goyo

function! WrapForTmux(s)
  if !exists('$TMUX')
    return a:s
  endif

  let tmux_start = "\<Esc>Ptmux;"
  let tmux_end = "\<Esc>\\"

  return tmux_start . substitute(a:s, "\<Esc>", "\<Esc>\<Esc>", 'g') . tmux_end
endfunction

let &t_SI .= WrapForTmux("\<Esc>[?2004h")
let &t_EI .= WrapForTmux("\<Esc>[?2004l")

function! XTermPasteBegin()
  set pastetoggle=<Esc>[201~
  set paste
  return ""
endfunction

inoremap <special> <expr> <Esc>[200~ XTermPasteBegin()
