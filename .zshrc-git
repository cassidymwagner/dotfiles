# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path for jupyter lab
export PATH=${PATH}:/home/cass/.local/bin

# Path for yt
export PYTHONPATH=$PYTHONPATH:/home/cass/applications/yt

# Path for opengl
export PYTHONPATH=$PYTHONPATH:/home/cass/applications/pyopengl

# Path for pyro2
export PYTHONPATH=$PYTHONPATH:/home/cass/applicatons/pyro2
export PYRO_HOME=/home/cass/applications/pyro2

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh
export PATH=$PATH:/usr/local/go/bin
export EDITOR="vim"

# Arduino variables
export ARDUINO_DIR=/usr/share/arduino
export ARDMK_DIR=/home/cass/desktop/misc/arduino_sketches/Arduino-Makefile
export AVR_TOOLS_DIR=/usr/include

# Gem path
export PATH=${PATH}:/home/cass/.gem/ruby/2.6.0/bin

# qt5 variable
export QT_QPA_PLATFORMTHEME=qt5ct

# Path to MESA

#export MESASDK_ROOT=/home/cass/applications/mesasdk
#export MESA_DIR=/home/cass/applications/mesa-r12115

#source $MESASDK_ROOT/bin/mesasdk_init.sh

export MESA2HYDRO_ROOT=/home/cass/applications/MESA2HYDRO
export PATH=$PATH:/home/cass/applications/MESA2HYDRO

# Path to SPLASH

export SPLASH_DIR=/home/cass/applications/splash
export PATH=$PATH:$SPLASH_DIR/bin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$SPLASH_DIR/giza/lib
export LD_LIBRARY_PATH=/usr/local/lib:${LD_LIBRARY_PATH}

# Spotify variables
export SPOTIFY_USERNAME=<your un>
export SPOTIPY_CLIENT_ID=<your id>
export SPOTIPY_CLIENT_SECRET=<your client secret>
export SPOTIPY_REDIRECT_URI='http://localhost:8080/callback/'

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="miloshadzic"

TERM=xterm-256color


alias ciao="source /home/cass/sherpa/ciao-4.9/bin/ciao.bash"
alias tui="source /home/cass/applications/tui/tui"
alias dict="sdcv -u wordnet"
alias groupme="npm start --prefix /home/cass/applications/GroupMe"
alias hdmi="sh /home/cass/desktop/misc/hdmi.sh"
alias git="hub"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
eval $(dircolors -b /etc/DIR_COLORS)
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}  

# Import colorscheme from 'wal'
# &   # Run the process in the background.
# ( ) # Hide shell job control messages.
#(wal -r &)

# Import the colors.
#. "${HOME}/.cache/wal/colors.sh"

# Create the alias.
#alias dmen='dmenu_run -nb "$color0" -nf "$color15" -sb "$color1" -sf "$color15"'
#alias lock="cd ~/i3_stuff  && source lock.sh && cd"

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

