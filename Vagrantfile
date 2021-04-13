# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  # config.vm.box = "hashicorp/precise32"
  config.vm.box = "gn/ubuntu16.04"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080
  # config.vm.network :forwarded_port, guest: 80, host: 4567


  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.network "private_network", type: "dhcp"


  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "/path/to/shared/folder/on/host/machine", "/path/to/shared/folder/on/guest/vm"

  # For example, say you've configured your aws-cli on your computer
  # and want it to appear in your guest VM without needing to
  # reconfigure aws-cli each time it's destroyed, you could sync your .aws folder
  #
  # config.vm.synced_folder "~/.aws", "/home/vagrant/.aws"

  # You can have as many synced folders as you like, just
  # add more config.vm.synced_folder declarations here

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
   config.vm.provision "shell", inline: <<-SHELL
     sudo ntpdate -s time.nist.gov
     sudo apt-get update

     # install AWS CLI via bundled installer
     cd /tmp
     curl --progress-bar -k "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o awscli-bundle.zip
     unzip awscli-bundle.zip
     sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
     rm -rf /tmp/awscli-bundle.zip /tmp/awscli-bundle

     # install aws-cli on top of aws bundled setup
     sudo /usr/local/aws/bin/pip install aws-shell
     sudo ln -s /usr/local/aws/bin/aws-shell /usr/local/bin/

     # install terraform
     cd /tmp
     curl --progress-bar -k https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip -o terraform.zip
     unzip terraform.zip
     chmod 755 terraform
     sudo mv terraform /usr/local/bin
     rm -f terraform.zip

     # install terraform wrapper script
     curl --progress-bar -k https://raw.git.internal.gracenote.com/DevOps/aws/master/terraform/remote_state_wrapper/tf -o /tmp/tf
     chmod 755 /tmp/tf
     sudo mv /tmp/tf /usr/local/bin
     sudo aptitude -y install python-pip
     sudo pip install pyhcl

  SHELL

  #config.vm.define "vm01" do |vm01|
  #   vm01.vm.box = "gn/ubuntu16.04"
  #    vm01.vm.provision :shell, path: "bootstrap01.sh"
  #  end
  #config.vm.define "vm02" do |vm02|
  #   vm02.vm.box = "gn/ubuntu16.04"
  #    vm02.vm.provision :shell, path: "bootstrap01.sh"
  #  end
end
