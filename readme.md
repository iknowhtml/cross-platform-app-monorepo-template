# Cross-Platform UI Monorepo Template

## Environment Set Up 🫨

### Install Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Please go through the following installations if you don't have one or more of the below in your local environment.

### Install Gitleaks

 ```sh
brew install gitleaks
```

### Install Fast Node Manager (`fnm`)

```sh
brew install fnm
```

Please follow the shell set up instructions [here](https://github.com/Schniz/fnm?tab=readme-ov-file#shell-setup)

### Install Node

```sh
fnm install
fnm use
```

### Install PNPM

```sh
corepack enable pnpm
```

### Install Mobile Dependencies

#### iOS

Install [XCode from the App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

#### Android

##### Android Studio

```sh
brew install --cask android-studio
```

##### Java

```sh
brew install java

#For the system Java wrappers to find this JDK, symlink it with
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

##### Create A Virtual Device
Follow the instructions [here](https://developer.android.com/studio/run/managing-avds) to create an virtual device

### Clone Repository

```sh
# pull project to local file system
git clone https://github.com/iknowhtml/cross-platform-app-monorepo-template.git

# changes current directory to the root of the u1 directory
cd cross-platform-app-monorepo-template
```

### Install Packages

```sh
# installs packages
pnpm i
```

### Running Applications

#### Web

```sh
cd apps/web
# starts the web application on http://localhost:3000
pnpm dev
```

#### Native

```sh
cd apps/native

# set up android -- this only needs to be ran once
# note you must have your android emulator running before running the command before
pnpm setup:android

# set up/run ios dev environent
pnpm setup:ios

# starts native app development server
pnpm dev
```
