
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.ssh.username = "vagrant"
  config.ssh.password = "vagrant"
  config.vm.box = "fabioq/experiencebox"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.hostname = "experiencebox"
  config.vm.network "forwarded_port", guest: 9000, host: 9000
  config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]

end